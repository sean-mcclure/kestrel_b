import "./css/search.css";

import Close from "./Close";

function Search() {
    return (
      <>
      <div className="search_wrapper">
         <div className="search_close"><Close/></div>
        <h4>SEARCH POSTS</h4>
            <div id="search_inputs_wrapper">
                <div><input className="search_input" placeholder="has words (comma separated)" spellCheck="false" maxLength="100"></input></div>
                <div><input className="search_input" placeholder="from user (e.g. @sean)" spellCheck="false" maxLength="100"></input></div>
            </div>
      </div>
      </>
    );
}

export default Search;