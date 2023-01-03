import Image from 'next/image';
import styles from '../styles/Events.module.css';

function Events() {
  return (
    <div className={styles.eventsDiv} id="eventsDiv">
      <p className={styles.eventsHeading}>Events</p>
      <hr />

      <center>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div className={`carousel-item active ${styles.carouselItem} `}>
              <div className="row">
                <div className="col-lg-8">
                  <p className={styles.eventHeading}>Cultural Fest</p>
                  <p className={styles.eventInfo}>
                    Virtual Stalls would be hosted, workshops from all around
                    india colleges, fun activities apart from academics, music
                    and all. Furthermore, we would have brands to sponsor & in
                    return they would get brand recognition. It would be more
                    like a music festival.
                  </p>
                </div>
                <div className="col-lg-4">
                  <Image
                    src="/event2.jpg"
                    width={400}
                    height={400}
                    className={` ${styles.carouselImage} `}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className={`carousel-item ${styles.carouselItem} `}>
              <div className="row">
                <div className="col-lg-8">
                  <p className={styles.eventHeading}>Expert-led-Sessions</p>
                  <p className={styles.eventInfo}>
                    Seminars, webinars, and panel discussions would be held on
                    various industry related topics with Experts from all
                    corners of India joining to give an influential and
                    immersive experience
                  </p>
                </div>
                <div className="col-lg-4">
                  <Image
                    src="/event4.jpg"
                    width={400}
                    height={400}
                    className={` ${styles.carouselImage} `}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className={`carousel-item ${styles.carouselItem} `}>
              <div className="row">
                <div className="col-lg-8">
                  <p className={styles.eventHeading}>Case Study</p>
                  <p className={styles.eventInfo}>
                    It is a competition based on case study designed by the
                    in-house professionals with experts as the judges. Invitees
                    would be colleges from all around india.
                  </p>
                </div>
                <div className="col-lg-4">
                  <Image
                    src="/event6.jpg"
                    width={400}
                    height={400}
                    className={` ${styles.carouselImage} `}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </center>
    </div>
  );
}

export default Events;
