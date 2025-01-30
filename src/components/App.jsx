import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "./notes"

export default function App(){
    return(
        <div>
            <Header />
            <div className="main-container">
            {notes.map(entry => {
                return(
                    <Note
                    key={entry.id}
                    title={entry.title}
                    content={entry.content}
                    />
                );
            })};
            </div>
            <Footer />
        </div>
    );
};