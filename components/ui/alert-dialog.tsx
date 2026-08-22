"use client"

import * as React from "react"
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./dialog"
import { Button } from "./button"

export interface AlertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  destructive?: boolean
}

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Continue",
  cancelText = "Cancel",
  onConfirm,
  destructive = false,
}: AlertDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          {cancelText}
        </Button>
        <Button
          variant={destructive ? "destructive" : "default"}
          onClick={() => {
            onConfirm()
            onOpenChange(false)
          }}
        >
          {confirmText}
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
