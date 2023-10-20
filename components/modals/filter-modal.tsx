"use client";

import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-modal";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
  headLine: z.string().optional(),
  date: z.string().optional(),
  filterTags: z.string().optional(),
});

const FilterModal = () => {
  const { isOpen, onClose, onOpen } = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      filterTags: "",
      headLine: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 py-10"
          >
            <FormField
              control={form.control}
              name="headLine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>헤드라인</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
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
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="날짜를 선택해주세요."
                      {...field}
                    />
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
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="날짜를 선택해주세요."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="pt-6">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-[60px] bg-[#3478F6]"
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
