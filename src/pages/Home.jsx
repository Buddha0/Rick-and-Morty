import Card from "../components/Card";
import Filter from "../components/Filter";
import PageNumber from "../components/pageNumber";

export default function Home({
  data,
  setName,
  setStatus,
  setGender,
  setSpecies,
  setPageNumber,
  pagination,
}) {
  return (
    <>
      <div className="main-section">
        <div className="container-left">
          <Filter
            setName={setName}
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />
        </div>

        <div className="container-right">
          <div className="max-width">
            <div className="main-header">
              <h1 className="heading center">The Rick and Morty</h1>
            </div>

            <div className="grid">
              {data.map((datas) => {
                return <Card datas={datas} key={datas.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <PageNumber
          setPageNumber={setPageNumber}
          pagination={pagination} />
    </>
  );
}
