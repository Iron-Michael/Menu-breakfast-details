import React from 'react'

const WhiteCardMenu = () => {
    return (
        <section className='white-bg'>
            <div >
                <img src='/image-omelette.jpeg'
                    alt='omelette-picture'
                    className="img-resolution"
                >
                </img>
            </div>
            <div style={{ width: "450px", display: "flex" }} className="label-row-size">
                <label className='big-label'>Simple Omelette Recipt</label>
            </div>
            <div style={{ width: "450px", display: "flex" }} className="label-row-size">
                <p style={{ fontSize: "10px", color: "#6a6765", fontFamily: "Outfit-Light" }}>
                    An easy an quick dish ,perfect for any meal. This classic omelette combines eggs cooked to perfection,optionally filled with your choice of cheese,vegetables or meats
                </p>
            </div>

            <div style={{ width: "450px", display: "flex", marginTop: "20px", flexDirection: "column", fontFamily: "Outfit-SemiBold" }} className="label-row-size">
                <label style={{ marginLeft: "20px", color: "#A6607f", fontSize: "12px" }}>Prepation time</label>
                <div style={{ marginLeft: "20px", fontSize: "10px", marginTop: "15px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "10px", color: "grey" }}><b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Total:</b> Approximately 10 minutes</text></li>
                </div>
                <div style={{ marginLeft: "20px", fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "10px", color: "grey" }}><b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Prepation:</b> Approximately 10 minutes</text></li>
                </div>
                <div style={{ marginLeft: "20px", fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "10px", color: "grey" }}><b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Cooking:</b> 5 minutes</text></li>
                </div>
            </div>

            <div style={{ width: "450px", display: "flex", marginTop: "20px", flexDirection: "column", fontFamily: "YoungSerif-Regular" }} className="label-row-size">
                <label style={{ fontSize: "25px",color:"#765245" }}>Ingredients</label>
            </div>

             <div style={{ width: "450px", display: "flex", flexDirection: "column", fontFamily: "Outfit-SemiBold" }} className="label-row-size">
                <div style={{ marginLeft: "10px", fontSize: "10px", marginTop: "15px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> 2-3 large eggs</text></li>
                </div>
                <div style={{ marginLeft: "10px", fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> Salt,to taste</text></li>
                </div>
                <div style={{ marginLeft: "10px", fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> Pepper,to taste</text></li>
                </div>
                 <div style={{ marginLeft: "10px", fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> 1 tablespoon of butter or oil</text></li>
                </div>
                  <div style={{ marginLeft: "10px", fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "300px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> Optional filling:cheese,diced vegetables,cooked meats,herbs</text></li>
                </div>

            </div>

            <div style={{width:"450px",height:"1px",backgroundColor:"#E0E0E0",marginTop:"20px"}} className="label-row-size"></div>

            <div style={{ width: "450px", display: "flex", marginTop: "20px", flexDirection: "column", fontFamily: "YoungSerif-Regular" }} className="label-row-size">
                <label style={{ fontSize: "25px",color:"#765245" }}>Instructions</label>
            </div>

             <ol style={{ width: "450px", display: "flex", flexDirection: "column", fontFamily: "Outfit-SemiBold",marginTop:"0px" }} className="label-row-size">
             
                <div style={{ fontSize: "10px", marginTop: "15px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "420px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> <b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</text></li>
                </div>
                <div style={{ fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "420px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> <b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Heat the pan: </b>Place a non-stick frying pan over medium heat and add butter or oil.</text></li>
                </div>
                <div style={{ fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "420px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> <b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Cook the omelette: </b></text>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                </div>
                 <div style={{ fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "420px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> <b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Add filling(optional): </b>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</text></li>
                </div>
                <div style={{ fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "420px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> <b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</text></li>
                </div>
                <div style={{ fontSize: "10px", marginTop: "10px", fontFamily: "Outfit-ExtraLight" }}>
                    <li style={{ width: "420px" }}>  <text style={{ marginLeft: "5px", color: "grey" }}> <b style={{ color: "#59504C", fontFamily: "Outfit-Bold" }}>Enjoy: </b>Serve hot, with additional salt and pepper if needed.</text></li>
                </div>
               
            </ol>

            <div style={{width:"450px",height:"1px",backgroundColor:"#E0E0E0",marginTop:"20px"}} className="label-row-size"></div>

              <div style={{ width: "450px", display: "flex", marginTop: "20px", flexDirection: "column", fontFamily: "YoungSerif-Regular" }} className="label-row-size">
                <label style={{ fontSize: "25px",color:"#765245" }}>Nutritions</label>
            </div>

            <div style={{ width: "450px", display: "flex",flexDirection:"column",fontFamily: "YoungSerif-Regular" }} className="label-row-size">
                <p style={{ fontSize: "10px",fontFamily: "Outfit-ExtraLight"  }}>
                    The table below shows nutritional values per serving without the additional fillings
                </p>
                <div style={{ width: "250px", display: "flex",justifyContent:"space-between",fontSize: "10px",marginLeft:"20px",fontFamily: "Outfit-Light" }}>
                    <div>Calories</div>
                    <div style={{fontFamily:"Outfit-Bold",color:"#765245"}}>277kcal</div>
                </div>
              <div style={{width:"450px",height:"1px",backgroundColor:"#E0E0E0",marginTop:"10px",marginBottom:"10px"}} ></div>
             <div style={{ width: "250px", display: "flex",justifyContent:"space-between",fontSize: "10px",marginLeft:"20px",fontFamily: "Outfit-Light" }}>
                    <div>Carbs</div>
                    <div style={{fontFamily:"Outfit-Bold",color:"#765245"}}>0g</div>
                </div>
              <div style={{width:"450px",height:"1px",backgroundColor:"#E0E0E0",marginTop:"10px",marginBottom:"10px"}}></div>
            <div style={{ width: "250px", display: "flex",justifyContent:"space-between",fontSize: "10px",marginLeft:"20px",fontFamily: "Outfit-Light" }}>
                    <div>Protein</div>
                    <div style={{fontFamily:"Outfit-Bold",color:"#765245"}}>20g</div>
                </div>
              <div style={{width:"450px",height:"1px",backgroundColor:"#E0E0E0",marginTop:"10px",marginBottom:"10px"}} className="label-row-size"></div>
             <div style={{ width: "250px", display: "flex",justifyContent:"space-between",fontSize: "10px",marginLeft:"20px",fontFamily: "Outfit-Light",marginBottom:"20px" }}>
                    <div>Fat</div>
                    <div style={{fontFamily:"Outfit-Bold",color:"#765245"}}>22g</div>
                </div>
             
            </div>
           
            
            

        </section>
    )
}

export default WhiteCardMenu