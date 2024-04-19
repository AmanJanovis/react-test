const images = [
    "https://images.unsplash.com/photo-1621097585600-4008d939ca17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBvcnRhaXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1633419798502-a013e8787da0?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600268866480-3bf595122fc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvcnRhaXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1608402593524-39104863f2fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRhaXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1614265350961-b451826136f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk0fHxwb3J0YWl0fGVufDB8fDB8fHww"
];
export const Gallery = () => {
    return (
        <div className="gallery-cover-div">
            <main className="gallery">
                {images.map((src, index) => (
                    <div key={index} className="gallery-card">
                        <img src={src} alt={index} />
                    </div>
                ))}
            </main>
        </div>
    )
}
export default Gallery;