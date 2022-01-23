import React from "react";

class News extends React.Component{
    componentDidMount(){
        let messages = [
            '<span>Auffrischimpfungen jetzt ab 12 Jahren empfohlen. (<a target="_blank" style="color: gray" href="https://www.rki.de/DE/Content/Kommissionen/STIKO/Empfehlungen/PM_2022-01-13.html">STIKO</a>)</span>',
            '<span>3. Impfstoffdosis jetzt auch für Janssen-Geimpfte empfohlen. (<a target="_blank" style="color: gray" href="https://www.rki.de/DE/Content/Infekt/EpidBull/Archiv/2022/03/Art_02.html;jsessionid=6DB3D6047079A455792ECAB78778605B.internet082">STIKO</a>)</span>'];

        let i = 0;
        document.getElementById('news').innerHTML = messages[i % messages.length];
        let intervalId = window.setInterval(function () {
            i += 1;
            if (document.getElementById('news')) {
                document.getElementById('news').innerHTML = messages[i % messages.length];
            }else{
                window.clearInterval(intervalId);
            }
            }, 10000);
        }

    render(){
        return (
            <div style={{"position": "relative"}} className="container main_page_text">
                <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{"fontSize": "0.9em"}}>
                    <strong>News:</strong> <span id="news"></span>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
                </div>
            </div>)}
}

export default News;