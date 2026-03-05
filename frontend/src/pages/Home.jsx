// Import CSS
import '../styles/Home.css';

// Import Icons
import { FaCat, FaDog, FaFish, FaHeart, FaPaw } from 'react-icons/fa';
import { GiRabbit } from 'react-icons/gi';

function Home() {

    // Dummy data for icons
    const categories = [
        { id: 1, name: 'Dogs', icon: <FaDog />},
        { id: 2, name: 'Cats', icon: <FaCat />},
        { id: 3, name: 'Rabbits', icon: <GiRabbit />},
        { id: 4, name: 'Fish', icon: <FaFish />},
        { id: 5, name: 'Others', icon: <FaHeart />}
    ];

    // Dummy data for pets
    const pets = [
        {
            id: 1,
            name: 'Mochi',
            type: 'Cat',
            age: '1 Year Old',
            img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500',
            isNew: true
        },
        {
            id: 2,
            name: 'Bruno',
            type: 'Dog',
            age: '2 Years Old',
            img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500',
            isNew: false
        },
        {
            id: 3,
            name: 'Luna',
            type: 'Cat',
            age: '6 Months Old',
            img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500',
            isNew: false
        },
        {
            id: 4,
            name: 'Snowy',
            type: 'Rabbit',
            age: '1 Year Old',
            img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=500',
            isNew: false
        },
        {
            id: 5,
            name: 'Rex',
            type: 'Dog',
            age: '3 Years Old',
            img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500',
            isNew: false
        },
    ];
    
    return (
        <div className='home-container'>
            <div className='hero-section'>
                <div className='hero-content'>
                    <h1 className='home-name'>Tearista Adoption</h1>
                    <p className='hero-tagline'>
                        Find Your New Best Friend and Warm Your Home.
                        Give them a second chance at happiness.
                    </p>

                    <div className='hero-btn'>
                        <button className='btn-primary'>Adopt Now</button>
                        <button className='btn-secondary'>How it Works</button>
                    </div>
                </div>

                <div className='hero-image-container'>
                    <img
                        src='https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1000'
                        alt='Cute pets'
                        className='hero-img'
                    />
                </div>
            </div>

            <div className='category-section'>
                <div className='section-title'>
                    <h2>Browse by Category</h2>
                    <p>Select the type of pet you'd like to bring home</p>
                </div>

                <div className='category-grid small-categories'>
                    {categories.map((item) => (
                        <div key={item.id} className='category-card mini'>
                            <div className='icon-circle'>{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='featured-section'>
                <div className='section-header'>
                    <div>
                        <h2>Friends Waiting for You</h2>
                        <p>These adorable pets are ready for a new home</p>
                    </div>
                    <a href='./view-pets' className='view-all'>View All <FaPaw /></a>
                </div>

                <div className='pet-grid'>
                    {pets.map((pet) => (
                        <div key={pet.id} className='pet-card'>
                            {pet.isNew && <div className='pet-badge'>New Arrival</div>}
                            <img src={pet.img} alt={pet.name} />
                            <div className='pet-info'>
                                <h4>{pet.name}</h4>
                                <p>{pet.type} | {pet.age}</p>
                                <button className='btn-detail'>Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;