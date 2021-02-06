import React from 'react';
import "../css/posts_and_headlines.css";

const headlines = [{
                    logo : "https://i0.wp.com/lo3energy.com/wp-content/uploads/2018/12/cnn-logo-square.png?ssl=1s",
                    title : "Forbes Says It's Targeting Trump Staffers and Their Future Employers",
                    link : "https://www.newsmax.com/"
                  },
                  {
                    logo : "https://www.freepnglogos.com/uploads/abc-png-logo/company-abc-png-logo-2.png",
                    title : "Forbes Says It's Targeting Trump Staffers and Their Future Employers",
                    link : "https://www.newsmax.com/"
                  },
                  {
                    logo : "https://www.pngitem.com/pimgs/m/488-4884737_msnbc-news-cnbc-logo-png-transparent-png.png",
                    title : "Forbes Says It's Targeting Trump Staffers and Their Future Employers",
                    link : "https://www.newsmax.com/"
                  },
                  {
                    logo : "https://cdn.freebiesupply.com/logos/large/2x/fox-news-logo-svg-vector.svg",
                    title : "Forbes Says It's Targeting Trump Staffers and Their Future Employers",
                    link : "https://www.newsmax.com/"
                  },
                  {
                    logo : "https://cdn.freebiesupply.com/logos/large/2x/fox-news-logo-svg-vector.svg",
                    title : "Forbes Says It's Targeting Trump Staffers and Their Future Employers",
                    link : "https://www.newsmax.com/"
                  }]

export var list_of_headlines = headlines.map((headline_obj, i) => 
        <div className="headlines_wrapper" key={i.toString()}>
            <a href={headline_obj.link} target="_blank" rel="noreferrer"><img className="news_logo" src={headline_obj.logo} alt="news_logo"></img></a>
            <h4 className="headline_title"><a href={headline_obj.link} target="_blank" rel="noreferrer">{headline_obj.title.slice(0, 40) + "..."}</a></h4>      
        </div>
);

class Headlines extends React.Component {
  render() {
    return (
         <>
         {list_of_headlines}
         </>
    );
  }
}

export default Headlines