function Add(x,y)
{
    return x+y;
}

function Sub(x,y)
{
    return x-y;
}

function Div(x,y)
{
    return (x/y).toFixed(2);
}

function Mul(x,y)
{
    return x*y;
}

export default Add;

export {Sub,Div,Mul};