const SearchInput = () => {

    const [search, setSearch] = useState(‘ ‘);


    
    const handleChange = { e } => {

    setSearch(e.target.value);

    };

   

return < input type="text" value={search} onChange={handleChange} />




}
