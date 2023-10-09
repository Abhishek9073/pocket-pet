import Image from "next/image";


const Home = () => {
  return (
    <div className="hero-section section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>jhghfe ejhguiefb ej einien ejue</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quo maxime dolore a totam sed nostrum saepe doloremque mollitia?
              Nihil nam molestias facilis, iste illum repellendus libero
              necessitatibus sint commodi.
            </p>
            <button className="btn btn-danger mx-2">Primary</button>
            <button className="btn btn-outline-secondary mx-2">Secondary</button>
          </div>
          <div className="col-lg-6">
          <Image
          src = "/teeth.jpg"
          alt ="hero pic"
          width={500}
          height={400}
           />
          </div>
          

          
        </div>
      </div>
    </div>
  );
};

export default Home;
