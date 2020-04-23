
let enviroment = "DEV";
let url = "https://desmova.bice.cl/landing-go-bice";
switch(enviroment){
  case "DEV":
    url = "https://desmova.bice.cl/landing-go-bice";
    break;

  case "QA":
    url = "https://desmova.bice.cl/landing-go-bice";
    break;

  case "PROD":
    url = "https://desmova.bice.cl/landing-go-bice";
    break;
}
export const environment = {
  production: true,
  urlGoBice:url
};
