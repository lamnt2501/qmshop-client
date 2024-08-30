import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { priceConvert } from "../../../../utils/priceConvert";
import { totalPrice } from "../../../../utils/totalPrice";

const ProductBillItem = ({ products }) => {
  const shippingPrice = 0;
  const voucherPrice = 0;
  const subPrice = totalPrice(products);

  const total = subPrice - voucherPrice + shippingPrice;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              Chi tiết
            </TableCell>
            <TableCell align="right">Giá</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tên</TableCell>
            <TableCell align="right">Màu sắc.</TableCell>
            <TableCell align="right">Kích cỡ</TableCell>
            <TableCell align="right">Đơn giá</TableCell>
            <TableCell align="right">Số lượng.</TableCell>
            <TableCell align="right">Tổng giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{product.color}</TableCell>
              <TableCell align="right">{product.size}</TableCell>
              <TableCell align="right">{priceConvert(product.price)}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">
                {priceConvert(product.price * product.quantity)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={4} colSpan={4} />
            <TableCell colSpan={1}>Tạm tính</TableCell>
            <TableCell align="right">{priceConvert(subPrice)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Phí vận chuyển</TableCell>
            <TableCell align="right">{priceConvert(shippingPrice)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Mã giảm giá</TableCell>
            <TableCell align="right">
              {"- " + priceConvert(voucherPrice)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={1}>Tổng cộng</TableCell>
            <TableCell align="right">{priceConvert(total)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductBillItem;
