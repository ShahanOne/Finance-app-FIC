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
                  <p className={styles.eventHeading}>Lorem</p>
                  <p className={styles.eventInfo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    harum officiis expedita ea, sequi possimus delectus labore.
                  </p>
                </div>
                <div className="col-lg-4">
                  <Image
                    src="/finance2.jpg"
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
                  <p className={styles.eventHeading}>Lorem</p>
                  <p className={styles.eventInfo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    harum officiis expedita ea, sequi possimus delectus labore.
                  </p>
                </div>
                <div className="col-lg-4">
                  <Image
                    src="/finance3.jpg"
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
                  <p className={styles.eventHeading}>Lorem</p>
                  <p className={styles.eventInfo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    harum officiis expedita ea, sequi possimus delectus labore.
                  </p>
                </div>
                <div className="col-lg-4">
                  <Image
                    src="/finance6.jpg"
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
