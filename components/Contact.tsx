
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">Get In Touch</div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">Ready to <br />Transform?</h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Our experts are waiting to help you optimize your logistics value chain. Let's schedule a demo.
            </p>

            <div className="space-y-6 pt-4">
              <ContactInfoItem icon="fa-envelope" title="Email" detail="support@loadbazaar.com" />
              <ContactInfoItem icon="fa-phone" title="Phone" detail="+91-8617296833" />
              <ContactInfoItem icon="fa-map-marker-alt" title="Headquarters" detail="ATRIKOM TECHNOLOGIES, Barasat, West Bengal, 700124" />
            </div>

            <div className="flex gap-4 pt-8">
              {['linkedin-in', 'twitter', 'facebook-f', 'instagram'].map(s => (
                <a key={s} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all border border-black/5 shadow-sm">
                  <i className={`fab fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-10 md:p-14 rounded-[4rem] border-black/5 relative overflow-hidden group shadow-xl bg-white/80">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormGroup label="Name" type="text" placeholder="John Doe" />
                <FormGroup label="Email" type="email" placeholder="john@example.com" />
              </div>
              <FormGroup label="Company" type="text" placeholder="Your Logistics Co." />
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Query Type</label>
                <select className="w-full bg-slate-50 border border-black/10 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-600 transition-all appearance-none shadow-sm">
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Request Demo</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-slate-50 border border-black/10 rounded-3xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-600 transition-all resize-none shadow-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full py-5 rounded-3xl bg-blue-600 text-white font-black text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                SEND PROTOCOL <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormGroup: React.FC<{ label: string; type: string; placeholder: string }> = ({ label, type, placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-slate-50 border border-black/10 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-600 transition-all shadow-sm"
    />
  </div>
);

const ContactInfoItem: React.FC<{ icon: string; title: string; detail: string }> = ({ icon, title, detail }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <div>
      <div className="text-xs font-black uppercase text-slate-400 tracking-widest mb-1">{title}</div>
      <div className="text-slate-900 font-bold">{detail}</div>
    </div>
  </div>
);

export default Contact;
