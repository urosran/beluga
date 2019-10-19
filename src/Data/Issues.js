
export async function getAllIssues(){
      return await serverCall()
}

export async function getAllIssuesForZip(zip){
      return await serverCall(zip)
}


async function serverCall(zipCode){
      let data 
      try {
            data = await (await fetch('https://desolate-lowlands-52819.herokuapp.com/issues')).json()  
      } catch(e){
            console.log("error:", e)
      }
      return data
}
export const issues = {}