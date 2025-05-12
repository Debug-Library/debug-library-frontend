export function Banner() {
    return (
        <div className="w-full h-auto flex justify-center items-center fixed top-0 z-50 bg-transparent">
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