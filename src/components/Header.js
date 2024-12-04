const Header = () => {
    return (
        <header className="fixed top-0 w-full px-8 py-4 bg-gradient-to-b from-black to-transparent z-20 flex justify-between items-center">
            {/* Netflix Logo */}
            <img 
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="Netflix Logo"
                className="h-8 sm:h-10"
            />

            {/* User Section */}
            <div className="flex items-center space-x-4">
                <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                    alt="User Icon"
                />
                <button className="text-sm sm:text-base font-semibold text-white hover:text-red-500 transition">
                    Sign Out
                </button>
            </div>
        </header>
    );
};

export default Header;
