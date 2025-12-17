"use client"

export function ContactMap() {
    return (
        <section id="map" className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-2">Our Location</h3>
                    <p className="text-muted-foreground">Pokhara-10, Kaski, Nepal</p>
                </div>

                <div className="bg-secondary/30 rounded-3xl overflow-hidden border border-border shadow-xl">
                    <div className="aspect-[16/9] md:aspect-[21/9]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28229.123456789!2d83.9856!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara%2033700%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="NavaGanga Financial Consultancy Location - Pokhara-10, Kaski"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
