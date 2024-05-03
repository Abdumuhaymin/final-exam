import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import PlasIcon from "../../../../public/icons/PlasIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
const Profile = () => {
  return (
    <div className="rounded-xl pt-8 pl-6 w-[1000px] pb-[140px] bg-white  border ">
      <div>
        <h1 className="text-font22 mb-[22px]">Sizning profilingiz</h1>
        <div>
          <div className="flex   items-end gap-1.5 ">
            <div>
              <Label>Ism</Label>
              <Input className="max-w-[300px] outline-none " type="text" />
            </div>
            <div>
              <Label>Familiya</Label>
              <Input className="max-w-[300px]  outline-none " type="text" />
            </div>
            <Button className="bg-black">Familiya</Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-font22 mb-[22px] mt-[48px]">
          Yetkazib berish manzili
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-green-500 flex py-[27px] bg-white hover:bg-white  gap-1 border-dashed border-[2px] w-[375px] items-center justify-center ">
              <PlasIcon /> Manzil qo’shish{" "}
            </Button>
          </DialogTrigger>
          <DialogContent className=" sm:max-w-[425px] md:max-w-[700px]">
            <DialogHeader>
              <DialogTitle> Yangi manzil qo’shish</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <div className="flex gap-[26px]">
                <div>
                  <Label>Yetkazish shahri *</Label>
                  <Input className="max-w-[300px] outline-none " type="text" />
                </div>
                <div>
                  <Label>Tuman *</Label>
                  <Input className="max-w-[300px]  outline-none " type="text" />
                </div>
              </div>
              <div className="flex gap-[26px]">
                <div className="mt-6">
                  <Label>Yetkazish shahri *</Label>
                  <Input className="max-w-[300px] outline-none " type="text" />
                </div>
                <div className="mt-6">
                  <Label>Ko’cha / Uy raqami *</Label>
                  <Input className="max-w-[300px]  outline-none " type="text" />
                </div>
              </div>
              <div className="mt-6">
                <Label>Qavat *</Label>
                <Input className="max-w-[210px] outline-none " type="text" />
              </div>
              <div className="flex gap-[26px]">
                <div className="mt-6">
                  <Label>Ismingiz *</Label>
                  <Input className="max-w-[300px] outline-none " type="text" />
                </div>
                <div className="mt-6">
                  <Label> Aloqa uchun raqam *</Label>
                  <Input className="max-w-[300px]  outline-none " type="text" />
                </div>
              </div>
              <div className="absolute bottom-[-40px] flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Asosiy manzil
                </label>
              </div>
            </div>
            <DialogFooter>
              <Button className="hover:bg-green-400" type="submit">
                Bekor qilish
              </Button>
              <Button className="hover:bg-green-400" type="submit">
                saqlash
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
