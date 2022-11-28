import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [animes, setAnimes] = useState({});
    const [formData, setFormData] = useState("");

    const getAnimes = async (formData) => {
        const url = `https://api.jikan.moe/v4/characters?page=0&limit=15&q=${formData}&order_by=favorites&sort=desc`;
        const response = await fetch(url).then((res) => res.json());
        if(response.status === 500){
            console.log(response)
            alert(`Server error! API not working, For more info view console. For developer : Please note that, it is server bug not mine 😔`)
        }else{
            setAnimes(response);
        }
    };

    const onFormSubmit = async (e) => {
        console.log(formData);
        getAnimes(formData);
        setFormData("");
        e.preventDefault();
    };

    useEffect(() => {
        getAnimes("");
    }, []);

    return (
        <div className="App">
            <header className="header shadow">
                <div>
                    <h2 className="text-center header-title text-light">
                        Search Anime Characters
                    </h2>
                    <form className="form" onSubmit={(e) => onFormSubmit(e)}>
                        <div className="row m-4">
                            <div className="col-lg-3"></div>
                            <div className="input-group mb-2 col-lg-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="bi bi-search"></i>
                                    </div>
                                </div>
                                <input
                                    name="formData"
                                    value={formData}
                                    onChange={(e) =>
                                        setFormData(e.target.value)
                                    }
                                    type="text"
                                    className="form-control"
                                ></input>
                            </div>
                            <div className="col-lg-1">
                                <button
                                    type="submit"
                                    className="btn btn-secondary btn-search w-100"
                                >
                                    Search
                                </button>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </form>
                    <h5 className="total text-center mt-4 text-light">
                        Total{" "}
                        <strong>
                            {animes.pagination !== undefined
                                ? animes.pagination.items.total.toLocaleString()
                                : 0}
                        </strong>{" "}
                        matching anime characters found
                    </h5>
                </div>
            </header>
            <div className="container mt-4">
                {animes.data === undefined || animes.data.length === 0 ? (
                    <h2 className="text-center mt-5">No result found !</h2>
                ) : (
                    animes.data.map((anime, index) => {
                        return (
                            <div
                                className="card mb-3 rounded shadow"
                                key={index}
                            >
                                <div className="row g-0">
                                    <div className="col-md-2 text-center position-relative">
                                        <img
                                            src={anime.images.jpg.image_url}
                                            className="img-fluid rounded thumbnail"
                                            alt="anime thumbnail"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-10">
                                                    <h5 className="card-title">
                                                        {anime.name}
                                                    </h5>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>
                                                        <i className="bi bi-heart-fill text-danger"></i>{" "}
                                                        {anime.favorites}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                {anime.about !== null &&
                                                    anime.about.slice(0, 160)}
                                                {"....."}
                                            </p>
                                            <div className="mt-0 mb-0">
                                                {anime.nicknames.map(
                                                    (nickname, index) => {
                                                        return (
                                                            <p
                                                                key={index}
                                                                className="btn btn-sm disabled mr-1 mt-0 mb-0 btn-outline-danger"
                                                            >
                                                                {nickname}
                                                            </p>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="col-md-2 text-center btn"
                                        href={anime.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="60"
                                            height="160"
                                            fill="currentColor"
                                            className="bi bi-arrow-right-short"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
export default App;
