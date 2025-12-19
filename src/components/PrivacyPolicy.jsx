import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Link to="/" className="btn btn-ghost mb-4 flex items-center gap-2">
                <ArrowLeft size={16} /> Back to Home
            </Link>
            
            <div className="glass-card p-8">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy e Cookie Policy</h1>
                
                <p className="text-sm opacity-75 mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>

                <div className="space-y-6 text-justify">
                    <p>Benvenuto su <strong>Prediction App</strong> ("Applicazione"). La tua privacy è importante per noi. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.</p>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">1. Titolare del Trattamento</h2>
                        <p>Il titolare del trattamento dei dati è:</p>
                        <p><strong>[Nome del Titolare]</strong><br/>
                        [Indirizzo]<br/>
                        Email di contatto: [Email di Contatto]</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">2. Tipologie di Dati raccolti</h2>
                        <p className="mb-2">Durante l'utilizzo della nostra Applicazione, potremmo raccogliere le seguenti tipologie di dati:</p>
                        
                        <h3 className="font-medium mt-2">a. Dati forniti volontariamente dall'utente</h3>
                        <ul className="list-disc pl-6 mb-2 space-y-1">
                            <li><strong>Dati di registrazione:</strong> Indirizzo email, password (criptata), nome utente.</li>
                            <li><strong>Dati di profilo:</strong> Immagine del profilo (se caricata), preferenze.</li>
                            <li><strong>Contenuti generati dall'utente:</strong> Pronostici sulle partite, commenti o altre interazioni all'interno dell'app.</li>
                        </ul>

                        <h3 className="font-medium mt-2">b. Dati raccolti automaticamente</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Dati tecnici:</strong> Indirizzo IP, tipo di browser, sistema operativo, log di sistema.</li>
                            <li><strong>Cookie e tecnologie simili:</strong> Vedi la sezione Cookie Policy per dettagli.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">3. Finalità del Trattamento</h2>
                        <ul className="list-decimal pl-6 space-y-1">
                            <li><strong>Fornitura del servizio:</strong> Permettere la registrazione, l'accesso e l'utilizzo delle funzionalità di pronostico.</li>
                            <li><strong>Sicurezza:</strong> Proteggere l'account utente e prevenire attività fraudolente.</li>
                            <li><strong>Miglioramento del servizio:</strong> Analizzare statistiche aggregate per ottimizzare l'esperienza utente.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">4. Basi Giuridiche</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Esecuzione di un contratto (Termini di d'uso del servizio).</li>
                            <li>Consenso dell'utente (per cookie opzionali o marketing, se attivi).</li>
                            <li>Legittimo interesse del titolare (sicurezza e miglioramento servizio).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">5. Destinatari dei Dati</h2>
                        <p>Utilizziamo servizi di terze parti per gestire l'infrastruttura. I tuoi dati potrebbero essere trattati da:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Google Firebase:</strong> Per autenticazione, database e hosting.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">6. Cookie Policy</h2>
                        <p>Questa Applicazione utilizza cookie e tecnologie simili per garantire il corretto funzionamento e migliorare l'esperienza.</p>
                        
                        <h3 className="font-medium mt-3 mb-1">Tipologie di cookie utilizzati</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Cookie Tecnici (Essenziali):</strong> Necessari per il funzionamento dell'app (es. sessione di accesso). Non richiedono consenso.</li>
                            <li><strong>Cookie Analitici:</strong> Utilizzati per raccogliere statistiche anonime.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-primary">7. Diritti dell'Utente</h2>
                        <p>In base al GDPR, hai diritto a accedere, rettificare, cancellare i tuoi dati o opporti al trattamento. Per esercitare i tuoi diritti, contatta il Titolare all'indirizzo email sopra indicato.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
