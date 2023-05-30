import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Software Development" img="card1.png" text="Our software development services are tailored to address your unique business requirements. Whether you need a customized application, a mobile app, or a robust enterprise software solution, our experienced developers are here to turn your vision into reality. We follow industry best practices and utilize cutting-edge technologies to ensure that our software solutions are scalable, secure, and user-friendly." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Web Development" img="card2.png" text="In today's digital age, having a strong online presence is crucial for any business. Our web development services focus on creating visually stunning, highly functional, and responsive websites. We collaborate closely with our clients to understand their brand identity, target audience, and business goals, allowing us to design and develop websites that effectively showcase their products or services. From intuitive user interfaces to seamless navigation, we strive to provide an exceptional online experience for both you and your customers." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="eCommerce Services" img="card3.png" text="The world of online retail is rapidly evolving, and we are here to help you thrive in this competitive landscape. Our E-Commerce services encompass everything you need to establish a successful online store. From building secure and scalable E-Commerce platforms to integrating payment gateways and implementing inventory management systems, we ensure that your online business runs smoothly and efficiently. Our team is well-versed in popular E-Commerce frameworks and platforms, enabling us to create a tailored solution that meets your specific business requirements." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
