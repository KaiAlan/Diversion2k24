
const Design = () => {
  
  const gradientTextStyle = {
    backgroundImage: 'linear-gradient(to right, #04619f, #4fb286)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="font-inter text-custom font-thin leading-normal text-center">
        <span>Revolutionizing </span>
        <span style={gradientTextStyle}> Agriculture </span>
        <span>with Our </span>
        <span className="font-bold">All-in-One </span>
        <span>AgriTech Ecosystem</span>
      </p>
    </div>
  );
};

// export default Design;
