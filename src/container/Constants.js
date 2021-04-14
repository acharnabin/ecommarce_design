import { CardContent,Paper,CardHeader,Avatar, Divider } from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';

const Desc=()=>{
    return(
        <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </>
    )
}

const Reviewcard=()=>{
    return(
        <>
            <div className="p-2 m-2">
            <CardHeader
                avatar={
                <Avatar>
                R
                </Avatar>
            }
                title="user"
                subheader="Posted on sep23,2020"
            />

            <Rating className="mx-3 mb-2"  name="read-only" value="3" readOnly />      

            <CardContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardContent>
            <Divider/>
            </div>
        </>
    )
}

const Table=()=>{
    return(
        <>
        <h5> Additonal Information</h5>
        <table class="table table-bordered table-striped">
        <tbody>
            <tr>
            <td>name</td>
            <td>name 1</td>
            
            </tr>
            <tr>
            <td>weight</td>
            <td>weight</td>
            
            </tr>
            <tr>
            <td>varinat</td>
            <td>variant 1</td>
            
           
            
            </tr>
        </tbody>
        </table>
    </>)
}

export {Reviewcard,Desc,Table}