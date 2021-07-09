

const Timeline = ({chirp}) => {

    return (
      <>
        <div className="d-flex flex-column text-center justify-content-center bg-secondary rounded shadow p-2 m-3">
          <p>@{chirp.username}</p>
          <h3>{chirp.msg}</h3>
        </div>
      </>
    );
  }

export default Timeline;
