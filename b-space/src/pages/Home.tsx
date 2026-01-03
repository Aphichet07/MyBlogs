import Cup from "../assets/images/Cupboards_.jpg";

function HomePage() {
  return (
    <div className="min-h-screen bg-white w-full font-mono text-slate-900 selection:bg-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-2 md:py-10">
        <div className="mb-12">
          <h1 className="text-xl font-bold tracking-tight mb-4">
            EntropySpace.
          </h1>
          <div className="w-full border-b border-dashed border-slate-300"></div>
        </div>

        <div className="mb-12 w-full">
          <img
            src={Cup}
            alt="Visualization"
            className="w-full aspect-3/1 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm border border-slate-100"
          />
        </div>

        <div className="space-y-8 text-sm md:text-base leading-loose text-justify">
          <p>
            <span className="italic font-bold">Entropy-Space</span> is more than
            just a name; it is my conceptual framework. It suggests that the
            inherent complexity and disorder (
            <span className="italic">Entropy</span>) found in
            <span className="font-bold"> AI Engineering</span> can be
            interpreted and organized through the geometric dimensions (
            <span className="italic">Space</span>) of{" "}
            <span className="font-bold">3D Computer Vision</span>.
          </p>

          <p>
            This platform is designed to function as my personal{" "}
            <span className="italic">Latent Space</span>—a place to encode
            research notes, visualize{" "}
            <span className="font-bold">neural fields</span>, and curate a
            knowledge base. Here, diverse concepts are allowed to converge,
            eventually synthesizing into meaningful insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
