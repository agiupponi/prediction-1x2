import { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { User, UserRole } from "../types";

export interface AdminStat {
    name: string;
    value: number;
    change: string;
    changeType: 'increase' | 'decrease' | 'neutral';
}

export function useAdminUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const usersCol = collection(db, "users");
            const userSnapshot = await getDocs(usersCol);
            const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User));
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdateUser = async (user: User): Promise<boolean> => {
        try {
            const userRef = doc(db, "users", user.id);
            await updateDoc(userRef, {
                displayName: user.displayName || null,
                first_name: user.first_name || null,
                last_name: user.last_name || null
            });
            toast.success("User updated successfully");
            await fetchUsers();
            return true;
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Failed to update user");
            return false;
        }
    };

    const handleRoleChange = async (id: string, newRole: UserRole) => {
        if (!window.confirm(`Are you sure you want to change this user's role to ${newRole}?`)) return;
        try {
            await updateDoc(doc(db, "users", id), { role: newRole });
            toast.success(`User role updated to ${newRole}`);
            await fetchUsers();
        } catch (error) {
            console.error(error);
            toast.error("Failed to update role");
        }
    };

    const deleteUser = async (userId: string) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            await deleteDoc(doc(db, "users", userId));
            toast.success('User deleted');
            await fetchUsers();
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete user');
        }
    };

    const stats: AdminStat[] = [
        {
            name: 'Total Users',
            value: users.length,
            change: '+0%',
            changeType: 'increase',
        },
        {
            name: 'Active Users',
            value: users.filter(user => user.role).length,
            change: '+0%',
            changeType: 'increase',
        },
        {
            name: 'Admins',
            value: users.filter(user => user.role === 'admin').length,
            change: '+0',
            changeType: 'increase',
        },
        {
            name: 'Managers',
            value: users.filter(user => user.role === 'manager').length,
            change: '+0',
            changeType: 'increase',
        },
    ];

    return {
        users,
        loading,
        stats,
        handleUpdateUser,
        handleRoleChange,
        deleteUser,
        refreshUsers: fetchUsers
    };
}
