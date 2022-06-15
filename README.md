# Tools for Ranking and Rarity

# Tutorial

## Prerequisites 

Install node_modules:
    
    $ yarn / yarn install / npm i / npm install
       
## Generate 

1. First thing first you have to select all attributes to folder Layers (Make sure format name folder and files is the same like the example inside the Layers folder)

2. Run

    ```shell
    $ yarn run generate / npm run generate
    ```
    
3. If the function success, folder Build will appears with all thing we need inside.

## Generate API (Get All metadata from API Paras)

1. Check all instruction you need to change inside file `utils/functions/getMetadata_API`

2. You need to make sure url response is the path of url metadata you want to get (which contract from paras you want to).

    ```shell
    const response = await fetch(
        "https://api-v2-mainnet.paras.id/token/CHANGE_THIS.near::" + i
    );
    ```

3. Run 

    ```shell
    $ yarn run generate_api
    ```
    
## Get Rarity from each attributes with image path

1. Make sure you've done Generate first

2. Run

    ```shell
    $ yarn run rarity
    ```
    
3. Results will appears inside your terminal as log
    
## Get total Ranking and Rarity with sort data (From Run Generate)

1. Make sure you've done Generate first

2. You can change file name or path inside `utils/functions/getRarity_OurMetadata` file

3. Run 

    ```shell
    $ yarn run rarity_our
    ```
        
## Get total Ranking and Rarity with sort data (From Run Generate API)

1. Make sure you've done Generate API first

2. You need to make sure path rawdata inside file `utils/functions/fetchUrl_IPFS.js` is the path of metadata you want to get.

3. Change file name or path inside `utils/functions/getRarity_fromMetadata_API` file

4. Run 

    ```shell
    $ yarn run rarity_api
    ```
                
## Get Media path from Metadata

1. Make sure you've done Generate first

2. You need to make sure path rawdata inside file `utils/functions/fetchUrl_IPFS.js` is the path of metadata you want to get.

3. Run 

    ```shell
    $ yarn run fetch_url
    ```
