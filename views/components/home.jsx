import React, { useEffect, useState } from "react"; // Added useState import
import { getEntries } from "../../db";
import Header from "./header";
import Footer from "./footer";
import Preview from "./Preview";
import AddBtn from "./AddBtn";

function Home() {
    const [entries, setEntries] = useState([]); // Use useState to manage state
    useEffect(() => {
        async function fetchEntries() { // Define an async function inside useEffect
            try {
                const fetchedEntries = await getEntries();
                setEntries(fetchedEntries); // Update state with fetched entries
            } catch (err) {
                console.error("Error fetching entries:", err);
            }
        }
        fetchEntries(); // Call the async function
    }, []);

    return (
        <div>
            <Header home={true} />
            {entries.length !== 0 ? (
                entries.map(entry => (
                    <Preview
                        key={entry.id}
                        entry={entry}
                    />
                ))
            ) : (
                <h3>No entries yet. Hit the + button to start writing.</h3>
            )}
            <AddBtn />
            <Footer />
        </div>
    );
};

export default Home;
