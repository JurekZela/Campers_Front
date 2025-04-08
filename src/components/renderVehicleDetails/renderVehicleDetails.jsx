import {Vehicles, VehicleInfo} from "./RenderVehicleDetails-styled.js";

export default  function renderVehicleDetails(name, value) {
return (
  <Vehicles>
    <VehicleInfo>{name}</VehicleInfo>
    <VehicleInfo>{value}</VehicleInfo>
  </Vehicles>
)
};

