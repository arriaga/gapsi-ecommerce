
export const getVisitor = async ( ) => {

        const testURL = 'https://node-red-nxdup.mybluemix.net/visitor';
        const myInit = {
            method: 'POST'
        };
        const myRequest = new Request(testURL, myInit);
        const respuesta = await fetch(myRequest);
        const {data} = await respuesta.json();
        return {
                welcome: data.welcome,
                version: data.version

        };


}
