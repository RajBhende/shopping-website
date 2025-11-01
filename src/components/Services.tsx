import { Phone, PackageCheck, ShieldCheck, Truck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Phone,
      title: "24/7 Customer Service",
      description: "We're here to help you with any questions or concerns you have, 24/7."
    },
    {
      icon: PackageCheck,
      title: "14-Day Money Back",
      description: "If you're not satisfied with your purchase, simply return it within 14 days for a refund."
    },
    {
      icon: ShieldCheck,
      title: "Our Guarantee",
      description: "We stand behind our products and services and guarantee your satisfaction."
    },
    {
      icon: Truck,
      title: "Shipping Worldwide",
      description: "We ship our products worldwide, making them accessible to customers everywhere."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

