import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChars } from "../../store/posts/thunks";
import { selectAllChars } from "../../store/posts/selectors";
// import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const allChars = useSelector(selectAllChars);
  //   console.log("selected chars:", allChars);

  useEffect(() => {
    dispatch(fetchChars());
  }, []);

  return (
    <div>
      <h3>Harry Potter and The List of Characters</h3>
      <div>
        {allChars.map((char) => {
          return (
            <div>
              <h4>{char.name}</h4>
              <img src={char.imgUrl} width="120px" alt="character picture" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { HomePage };
