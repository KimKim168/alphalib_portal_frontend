"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_API_URL } from "@/env";

export default function MyOrderWithTelegram({ id }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogSuccess, setOpenDialogSuccess] = useState(false);

  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{9,15}$/; // Adjust to your region's format
    if (!phone) return "Phone Number is Required.";
    if (!phoneRegex.test(phone)) return "Invalid phone number format.";
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validatePhoneNumber(phone);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }
    const res = await fetch(
      BASE_API_URL + `/sent_to_telegram?phone=${phone}&product_id=${id}`
    );
    if (!res.ok) {
      console.log("Fail to sent to telegram");
      setError("Submit Fail, Please Contact to Admin Page.");
      setLoading(false);
      return;
    }

    const result = await res.json();
    setLoading(false);
    setError("");
    setPhone("");
    setOpenDialog(false);
    setOpenDialogSuccess(true);
    console.log(result);
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={(state) => setOpenDialog(state)}>
        <DialogTrigger asChild>
          <button
            onClick={() => setOpenDialog(true)}
            className="border p-1 cursor-pointer sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
          >
            <Image
              src={`/assets/images/telegram.png`}
              width={600}
              height={600}
              className="w-7 xl:w-10"
              alt="image"
            />
            <span className="text-start text-[10px] sm:text-[10px] xl:text-[13px]">
              Order with Telegram
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Order With Telegram</DialogTitle>
            <DialogDescription>
              Please Input Your Phone Number
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="name" className="text-start">
                Phone
              </Label>
              <Input
                type="number"
                id="name"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <DialogFooter>
            {loading ? (
              <Button type="submit">Submiting...</Button>
            ) : (
              <Button
                type="submit"
                onClick={() => {
                  setLoading(true);
                  handleSubmit();
                }}
              >
                Submit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog Success */}
      <Dialog
        open={openDialogSuccess}
        onOpenChange={(state) => setOpenDialogSuccess(state)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Successfully Order</DialogTitle>
            <DialogDescription>
              We will conact you back as soon as posible.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
