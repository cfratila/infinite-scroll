import type { Photo } from "./Card.type";
import "./Card.styles.css";

const Card = ( { photo }: { photo : Photo} ) => {
  return (
    <div key={photo.id} className="photo-card">
      <h4>{photo.author}</h4>
      <img src={photo.download_url} alt={photo.author} />
    </div>
  );
};

export default Card;
