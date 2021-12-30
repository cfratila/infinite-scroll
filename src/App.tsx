import React from 'react';
import './App.css';
import { matchQuery } from './utils/matchQuery';
import { usePhotoListing } from './hooks/usePhotoListing';
import InfiniteScroll from './components/InfiniteScroll';
import Card from './components/Card';
import { Photo } from './components/Card/Card.type';

function App() {

  return (
    <div className="App">
      <main>
        {matchQuery(usePhotoListing(), {
          isIdle: () => <p>Loading ...</p>,
          isLoading: () => <p>Loading ...</p>,
          isError: () => (
            <p>An error occured</p>
          ),
          isSuccess: (query) => <InfiniteScroll hasNextPage={query.hasNextPage} loadMore={query.fetchNextPage} >
            {
              query.data.pages?.map((page: any) => {
                return page.results.map((photo: Photo) => {
                  return <Card photo={photo} key={photo.id} />
                })
              })
            }
          </InfiniteScroll>
        })}
      </main>
    </div>
  );
}

export default App;
