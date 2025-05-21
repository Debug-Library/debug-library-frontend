export function Banner() {
    return (
        <div className="w-full h-96 bg-cover bg-center">
            <a href="#">
                <img
                    className="w-full object-contain
                    py-5"
                    src="/src/assets/banner.png"
                    alt="Banner de anúncio personalizado"
                />
            </a>
        </div>
    );
}

export default Banner;