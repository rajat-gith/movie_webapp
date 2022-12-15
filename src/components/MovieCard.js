import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import "../css/style.css";
function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [handleModal, sethandleModal] = useState(false);

  function OpenModal() {
    sethandleModal(true);
  }
  function CloseModal() {
    sethandleModal(false);
  }
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Card.Img
          src={`${base_url}/${movie.poster_path}`}
          onClick={OpenModal}
        />
        <Modal show={handleModal} onClick={CloseModal}>
          <Modal.Body>
            <div className="segment_1">
              <div className="title">
                {movie.hasOwnProperty("title") ? (
                  <h5>{movie.title}</h5>
                ) : (
                  <h5>{movie.name}</h5>
                )}
              </div>
              <div className="cross_icon">
                <img
                  src="https://img.icons8.com/ios/512/delete-sign.png"
                  onClick={CloseModal}
                />
              </div>
            </div>
            <div className="modal_content">
              <div className="segment_2">
                <img src={`${base_url}/${movie.poster_path}`} alt="" />
                <div className="text">
                  <p>Release Date: {movie.release_date}</p>
                  <p>{movie.overview}</p>
                  <p>
                    {movie.vote_average}/10 ({movie.vote_count})
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Card.Title as="div">
          {movie.hasOwnProperty("title") ? (
            <h5>{movie.title}</h5>
          ) : (
            <h5>{movie.name}</h5>
          )}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
