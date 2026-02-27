export default function ProfileImage({
    src,
    shape = "circle",
    size = 100
  }) {
    if (!src) return null;
  
    const radius =
      shape === "circle" ? "50%" :
      shape === "square" ? "8px" :
      "20px";
  
    return (
      <img
        src={src}
        alt="profile"
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          objectFit: "cover",
          border: "2px solid #ddd"
        }}
      />
    );
  }
  