import React from "react";
import {Text , Image, Box, Stack, Heading, Tag, TagLabel } from '@chakra-ui/react'

const Product = ({src, category, brand, detail, price}) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={src} />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy= "product-brand">{brand}</TagLabel>
      </Tag>
      <Heading data-cy="product-details">{detail}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
