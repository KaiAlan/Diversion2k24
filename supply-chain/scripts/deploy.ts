import { ethers } from "hardhat";

async function main() {

  // Deploying the contract
  const supplychain = await ethers.deployContract('Supplychain_revised')

  await supplychain.waitForDeployment();

  console.log("Registration contract deployed to:", supplychain.target);

  await supplychain.addFarmer("itsme","kolksts","2343142");
  await supplychain.addCropDetails("itsme","kolksts",3225,32);

  // const value = await supplychain.addresstoevery('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');

  const allCrops = await supplychain.getAllCrops();
  const farmerDetails = await supplychain.addresstofarmer('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
  const validateFarmer = await supplychain.farmervalidation('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
  const validateDistributer = await supplychain.Distributorvalidation('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
  const cropDetailsbyId = await supplychain.idtoDetails(0);

  // console.log(value);
  console.log(allCrops)
  console.log(farmerDetails)
  console.log('is farmer: ', validateFarmer)
  console.log('is distributer: ', validateDistributer)
  console.log('crop details of id 0 is: ',cropDetailsbyId, cropDetailsbyId[0].o)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});