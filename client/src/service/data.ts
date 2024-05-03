"use server";
import React from "react";
import { CategoryType } from "@/types/category";
const url = process.env.API_URL;

export const getCategory = async () => {
  try {
    const res = await fetch(url + "/categories");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getBanners = async () => {
  try {
    const res = await fetch(url + "/banners");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getProducts = async () => {
  try {
    const res = await fetch(url + "/all");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getSmartphones = async () => {
  try {
    const res = await fetch(url + "/phones");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getChargers = async () => {
  try {
    const res = await fetch(url + "/chargers");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getTablets = async () => {
  try {
    const res = await fetch(url + "/tablets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getHeadphones = async () => {
  try {
    const res = await fetch(url + "/earphones");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getFlashDrive = async () => {
  try {
    const res = await fetch(url + "/flashDrive");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getAccessuars = async () => {
  try {
    const res = await fetch(url + "/accessories");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const getGadgets = async () => {
  try {
    const res = await fetch(url + "/gadgets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
