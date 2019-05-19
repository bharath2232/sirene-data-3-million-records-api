# France Sirene Database API
An Powerfull Smart Secure Api to Fetch data for all the Enterprises by SIREN number

![alt text](https://bharath.fr/image25.png)

## Features
* Fast and Powerfull and Fecure api
* 3 millon plus records
* Update every Month
* Fetch enterpise detail by SIREN Number
* AI Based filtering with tenserflow - coming soon
 


## Build with 
* Node
* Express
* Mongoose
* Mongodb


## GENERATE TOKEN

* First Get the token to use the api, token can be generated by POST method
```bash
POST htts://sireneapi.bharath.fr/token
```
* You will get the token in the response of the API
* Copy the token , Please do not generate multipul Token

## FETCH DATA

* To fetch data you need the token, 
* The API takes two parameters key and id
* Key = Token
* id  = Sirene Number

```bash
GET http://sireneapi.bharath.fr/fetch?key=XXXXXXXXXXXXXX&id=530085802
```
* You will get the respose with enterprise data


```javascript
  {
    "_id": "5cdf3102aad334f4ebef7b7c",
    "datasetid": "sirene@public",
    "recordid": "df2092b775887c0ad626c3c88cc1e3da5e8d7a4c",
    "fields": {
        "efetcent": "50",
        "l6_declaree": "75002 PARIS 2",
        "l6_normalisee": "75002 PARIS 2",
        "libtefen": "21 - 50 à 99 salariés",
        "iriset": "75102",
        "libcom": "PARIS 2",
        "typvoie": "RUE",
        "dapet": "2018",
        "dcren": "2011-01-01",
        "l1_normalisee": "FACEBOOK FRANCE",
        "epci": "200054781",
        "ddebact": "2016-04-18",
        "categorie": "PME",
        "tcd": "80",
        "modet": "S",
        "libtefet": "21 - 50 à 99 salariés",
        "proden": "Productif",
        "libtu": "Agglomération de Paris",
        "siren": "530085802",
        "nom_dept": "PARIS",
        "apet700": "7312Z",
        "depcomet": "75102",
        "section": "Activités spécialisées, scientifiques et techniques",
        "tu": "8",
        "libvoie": "MENARS",
        "defen": "2016",
        "libapet": "Régie publicitaire de médias",
        "depcomen": "75102",
        "amintret": "2016-04",
        "code_section": "M",
        "siret": "53008580200037",
        "l4_normalisee": "6 RUE MENARS",
        "prodet": "Productif",
        "libactivnat": "Services",
        "nomen_long": "FACEBOOK FRANCE",
        "codpos": "75002",
        "monoact": "1",
        "code_classe": "7312",
        "l4_declaree": "6 RUE MENARS",
        "amintren": "2012-09",
        "apen700": "7312Z",
        "siege": "Etablissement siège",
        "nic": "00037",
        "tefet": "21",
        "libreg_new": "Ile-de-France",
        "nj": "5498",
        "libmonoact": "Entreprise dont tous les établissements ont la même activité principale",
        "numvoie": "6",
        "nicsiege": "00037",
        "libmodet": "Activité simple",
        "libmoden": "Activité simple",
        "lieuact": "07",
        "diffcom": "Établissement diffusable",
        "dcret": "2016-04-18",
        "du": "00",
        "coordonnees": [
            48.869516,
            2.338222
        ],
        "depet": "75",
        "code_division": "730",
        "code_groupe": "731",
        "datemaj": "2018-08-30T17:51:59+02:00",
        "dapen": "2018",
        "defet": "2016",
        "l1_declaree": "FACEBOOK FRANCE",
        "activnat": "12",
        "uu": "51",
        "activite": "Activités spécialisées, scientifiques et techniques / Régie publicitaire de médias",
        "libnj": "SARL unipersonnelle",
        "tefen": "21",
        "efencent": "50",
        "rpen": "11",
        "origine": "1",
        "libapen": "Régie publicitaire de médias",
        "zemet": "1101",
        "arronet": "1",
        "saisonat": "Permanente",
        "rpet": "11",
        "sous_classe": "Régie publicitaire de médias",
        "moden": "S",
        "comet": "102",
        "auxilt": "Non auxiliaire",
        "ind_publipo": "établissement faisant partie du champ du publipostage",
        "liborigine": "Création (pour tout type de déclaration)"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
            2.338222,
            48.869516
        ]
    },
    "record_timestamp": "2019-03-04T13:31:00+01:00"
}
```
## Postman Collection
* You can download and import postman collection here

## Support
* Handling such a huge data is very difficult , i will try to keep it 99.99% uptime
* For any other issue mail me at me@bharath.fr
* 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
Made with Love in Paris

## License
[MIT](https://choosealicense.com/licenses/mit/)