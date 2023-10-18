import {TablePagination} from "@mui/material";
import React from "react";
import {Pokemon} from "../../types/pokemon";

type Props = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setRowsPerPage:  React.Dispatch<React.SetStateAction<number>>
    rowsPerPage: number,
    pokemon: Pokemon[],
}
export const Pagination: React.FC<Props>= ({
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    pokemon,
}) => {
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={pokemon.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        />
    )
}
