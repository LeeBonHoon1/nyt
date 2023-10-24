"use client";

import React, { forwardRef } from "react";
import { useCallback } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFilter from "@/hooks/use-filter";
import Modal from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-modal";
import { toast } from "react-hot-toast";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { Languages } from "@/common/language";

import { ModalProps } from "@/components/ui/modal";

const formSchema = z.object({
  headLine: z.string(),
  date: z.string().or(z.date()),
  filterTags: z.string().array(),
});

const FilterModal = () => {
  const { addFilterTag } = useFilter();
  const { isOpen, onClose } = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      filterTags: [],
      headLine: "",
    },
  });

  const closeModal = () => {
    form.reset();
    onClose();
  };

  const tagClickHandler = useCallback(
    (value: string) => {
      const currentFilterTags = form.getValues().filterTags || [];
      const isSameValue = currentFilterTags.includes(value);

      if (isSameValue) {
        const updatedFilterTags = currentFilterTags.filter(
          (tag) => tag !== value
        );
        form.setValue("filterTags", updatedFilterTags);
      } else {
        const updatedFilterTags = [...currentFilterTags, value];
        form.setValue("filterTags", updatedFilterTags);
      }
    },
    [form]
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { date, headLine, filterTags } = values || {};

    const filterData = {
      headline: headLine,
      date: date ? dayjs(date).format("YYYYMMDD") : "",
      filterTags,
    };
    addFilterTag(filterData);

    toast.success("반영 되었습니다");
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="headLine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>헤드라인</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="검색하실 헤드라인을 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>날짜</FormLabel>
                  <FormControl {...field}>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full flex justify-between text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            dayjs(field.value).format("YYYY.M.D")
                          ) : (
                            <span>날짜를 선택해주세요.</span>
                          )}
                          <CalendarIcon className="mr-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="filterTags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>국가</FormLabel>
                  <FormControl {...field}>
                    <div className="flex items-center justify-start gap-1 flex-wrap w-full space-y-1">
                      {Languages.map((item) => {
                        const isSelectTags = form
                          .getValues()
                          .filterTags?.includes(item.value);
                        return (
                          <div
                            onClick={() => tagClickHandler(item.value)}
                            key={item.value}
                            className={cn(
                              "text-[14px] flex items-center justify-center px-3 py-2 border border-[#F2F2F2] rounded-full cursor-pointer",
                              isSelectTags
                                ? "text-white bg-[#82B0F4]"
                                : "text-black"
                            )}
                          >
                            {item.label}
                          </div>
                        );
                      })}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="pt-3">
              <Button
                type="submit"
                className="w-full h-[60px] bg-[#3478F6] text-[16px]"
              >
                필터 적용하기
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default FilterModal;
