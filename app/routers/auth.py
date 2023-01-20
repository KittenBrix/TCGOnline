from fastapi import APIRouter, Depends
from ..dependencies import oauth2_scheme


router = APIRouter(
    prefix="/auth",
    tags=["items"],
    dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)

@router.get("/items/")
async def read_items(token: str = Depends(oauth2_scheme)):
    return {"token": token}