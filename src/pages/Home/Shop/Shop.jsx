import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";
import loadingPic from '../../../assets/images/loading-pic.png'

const Shop = () => {
  const [avengers, setAvengers] = useState([]);
  useEffect(() => {
    fetch(`https://superfinity-server.vercel.app/categories?category=avengers`)
      .then((res) => res.json())
      .then((data) => {
        setAvengers(data);
      });
  }, []);

  const [villains, setVillains] = useState([]);
  useEffect(() => {
    fetch(`https://superfinity-server.vercel.app/categories?category=villains`)
      .then((res) => res.json())
      .then((data) => {
        setVillains(data);
      });
  }, []);

  const [mutants, setMutants] = useState([]);
  useEffect(() => {
    fetch(`https://superfinity-server.vercel.app/categories?category=mutants`)
      .then((res) => res.json())
      .then((data) => {
        setMutants(data);
      });
  }, []);

  const [guardian, setGuardian] = useState([]);
  useEffect(() => {
    const encodedSearchTerm = encodeURIComponent("guardian of galaxy");
    fetch(`https://superfinity-server.vercel.app/categories?category=${encodedSearchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setGuardian(data);
      });
  }, []);
  return (
    <div className="bg-[#030303]">
      <div className="w-3/4 mx-auto py-20 space-y-10">
        <div className="space-y-4 ">
          <h3 className="text-3xl font-bold">
            Shop By Category |{" "}
            <span className="text-[#F0141E]">Superfinity Plus</span>
          </h3>
          <div className="line h-1"></div>
        </div>
        <div className="space-y-2">
          <h3 className="lg:text-3xl text-2xl font-bold">
            <span className="text-[#F0141E]">Assemble</span> the Villains,
            Mutants, and Guardians!
          </h3>
          <p>
            Delve into the Epic World of Marvel: Unleashing the Powers of
            Villains, Mutants, and Guardians! Discover a Vault of Exquisite and
            Coveted Comic Books, Preserving the Essence of Classic Characters.
          </p>
        </div>
        <div className="w-full lg:w-3/4 mx-auto">
          <Tabs>
            <TabList>
              <Tab>Avengers</Tab>
              <Tab>Villains</Tab>
              <Tab>Mutants</Tab>
              <Tab>Guardians</Tab>
            </TabList>

            <TabPanel className="mt-5 ">
              {avengers.length === 0 ? (
                <div className="bg-white">
                  <img
                    src={loadingPic}
                    alt=""
                    className="animate-spin mx-auto"
                  />
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {avengers.map((avenger) => (
                    <ToyCard key={avenger._id} toy={avenger}></ToyCard>
                  ))}
                </div>
              )}
            </TabPanel>
            <TabPanel>
            {villains.length === 0 ? (
                <div className="bg-white">
                  <img
                    src={loadingPic}
                    alt=""
                    className="animate-spin mx-auto"
                  />
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {villains.map((avenger) => (
                    <ToyCard key={avenger._id} toy={avenger}></ToyCard>
                  ))}
                </div>
              )}
            </TabPanel>
            <TabPanel>
            {mutants.length === 0 ? (
                <div className="bg-white">
                  <img
                    src={loadingPic}
                    alt=""
                    className="animate-spin mx-auto"
                  />
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {mutants.map((avenger) => (
                    <ToyCard key={avenger._id} toy={avenger}></ToyCard>
                  ))}
                </div>
              )}
            </TabPanel>
            <TabPanel>
            {guardian.length === 0 ? (
                <div className="bg-white">
                  <img
                    src={loadingPic}
                    alt=""
                    className="animate-spin mx-auto"
                  />
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {guardian.map((avenger) => (
                    <ToyCard key={avenger._id} toy={avenger}></ToyCard>
                  ))}
                </div>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Shop;
