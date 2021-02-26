import "../css/search.css";

import Close from "./Close";

function Search() {
    return (
      <>
      <div className="search_wrapper">
         <div className="search_close"><Close/></div>
            <div id="search_inputs_wrapper">
                <div><input className="search_input" placeholder="has words (comma separated)" spellCheck="false" maxLength="100"></input></div>
                <div><input className="search_input" placeholder="from user (e.g. @sean)" spellCheck="false" maxLength="100"></input></div>
                <button className="search_button">SEARCH POSTS</button>
            </div>
      </div>
      </>
    );
}

export default Search;