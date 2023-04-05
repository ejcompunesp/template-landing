type Textprops = {
    size:string;
    color:string;
    children: string;
}

export const Text = ({size, color, children}:Textprops) => {
   return <div style = {{fontSize: size, color: color, textAlign: "center"}} className="font-serif   ">   
     {children}
      </div>
}